import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxyController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getGalaxies)


      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createGalaxy)

  }

  async getGalaxies(req, res, next) {
    try {
      const Galaxies = await galaxiesService.getGalaxies()

      return res.send(Galaxies)
    } catch (error) {
      next(error)
    }
  }
  async createGalaxy(req, res, next) {
    try {
      const galaxyData = req.body
      const galaxy = await galaxiesService.createGalaxy(galaxyData)

      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}